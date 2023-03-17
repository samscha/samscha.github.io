const secrets = JSON.parse(process.env.secrets);

module.exports = {
  get: (secret) => {
    const decryptedSecret = secrets[secret];
    if (!decryptedSecret) {
      throw new Error(`secret not found for: ${secret}`);
    }

    return decryptedSecret;
  },
};
