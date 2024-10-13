import {ControllerMixin} from "@lionrockjs/mvc";
import {ControllerMixinMultipartForm} from "@lionrockjs/mixin-form";

export default class ControllerMixinPiiWrite extends ControllerMixin {
  static ENV_PII_PUBLIC_KEY = 'piiPublicKey';

  async static before(state){
    // check post data has pii data
    const $_POST = state.get(ControllerMixinMultipartForm.POST_DATA);
    if(!$_POST)return;
    if(!$_POST['pii'])return; // pii object
    Object.keys($_POST['pii']).forEach(key=>{
      $_POST[key] = this.encrypt($_POST['pii'][key]);
    });
  }

  async static encrypt(data){

  }
}