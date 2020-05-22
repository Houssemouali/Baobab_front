import { SocialMedia } from "./SocialMedia";

export class JournalistSignup  {
  id: any;
  name: string;
  email: string;
  username: any;
  password: string;
  type_id:any;
  iName:string;
  adress:string;
  bio:string;
  is_active:boolean;
  phone:string;
  role: string[] ;
  socialMedia:SocialMedia;
//     actualEntreprise: any;
//    nationality: string;
//     experience: any;
//   dateNaissance: any ;
//  numtel: string;
//   motivationtext: any;
//   status : any;
//   cv: File;
//   portefolio: File;

  constructor(role: string) {
    this.role = ['journaliste'];
    }

}
