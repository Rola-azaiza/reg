import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ){}

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if( auth().currentUser){
        this.afAuth.auth.signOut()
        resolve();
      }
      else{
        reject();
      }
    });
  }


}
