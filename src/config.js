const env = "prod";

export const getUrl = () => {
  if (env === "dev") {
    return "http://localhost/";
  } else {
    return "http://ec2-35-154-148-3.ap-south-1.compute.amazonaws.com/"
  }
}