interface ICryptor {
  compare: (str: string, strHashed: string) => Promise<boolean>;

  genSalt: () => Promise<string>;

  hash: (str: string, salt: string) => Promise<string>;
}

export { ICryptor };
