import controllerRegister from "../controllers/controllerRegister";

export default (data, onSuccess) => {
  //make call to the controller
  controllerRegister(data, onSuccess);
}