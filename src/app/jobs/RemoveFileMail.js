import Mail from '../../lib/Mail';

class RemoveFileMail {
  get key() {
    return 'RemoveFileMail';
  }

  async handle({ data }) {
    const { user, file } = data;

    Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Your file has been removed.',
      template: 'RemoveFileEmaill',
      context: {
        file_name: file.name,
      },
    });
  }
}

export default new RemoveFileMail();
