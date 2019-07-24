import User from '../models/User';
import File from '../models/File';

import Queue from '../../lib/Queue';
import RemoveFileMail from '../jobs/RemoveFileMail';

class UserControler {
  async index(req, res) {
    const user = await User.find().populate('file');

    return res.json(user);
  }

  async delete(req, res) {
    const user = await User.findOneAndRemove(req.params.id).populate('file');
    const file = await File.findOneAndRemove(user.file);

    await Queue.add(RemoveFileMail.key, { user, file });

    return res.json();
  }

  async store(req, res) {
    const {
      originalname: name,
      size,
      filename: path,
      location: url = '',
    } = req.file;

    const file = await File.create({ name, size, path, url });

    const user = await User.create({ ...req.body, file });

    return res.json(user);
  }
}

export default new UserControler();
