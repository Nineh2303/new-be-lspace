export class GoogleLoginResponse {
  username?: string;
  email?: string;
  image?: string;

  constructor(username?: string, email?: string, image?: string) {
    this.username = username;
    this.email = email;
    this.image = image;
  }
}

export interface IGoogleVerifyPayload {
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
}
