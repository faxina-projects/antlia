type Secret = string | Buffer | { key: string | Buffer; passphrase: string };

type SignOptions = {
  expiresIn?: string | number | undefined;
  notBefore?: string | number | undefined;
  issuer?: string | undefined;
  jwtid?: string | undefined;
};

type VerifyOptions = {
  clockTimestamp?: number | undefined;
  clockTolerance?: number | undefined;
  issuer?: string | string[] | undefined;
  ignoreExpiration?: boolean | undefined;
  ignoreNotBefore?: boolean | undefined;
  jwtid?: string | undefined;
  maxAge?: string | number | undefined;
};

type Payload = string | Buffer | object;

interface IJwt {
  sign: <P extends Payload>(
    payload: P,
    secretOrPrivateKey: Secret,
    options?: SignOptions,
  ) => string;

  verify: <P extends Payload>(
    token: string,
    secretOrPrivateKey: Secret,
    options?: VerifyOptions,
  ) => P;
}

export { IJwt, Payload, Secret, SignOptions, VerifyOptions };
