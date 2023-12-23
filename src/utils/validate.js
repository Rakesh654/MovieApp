export const validData = (email, password, name) =>{
    if(name !== null && name === "") return "Name field required";
      
    if(email == null || email === undefined || email === "") return "Email is required";
    if(password == null || password === undefined || password === "") return "Password is required";

  const isValidEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password);

  if(!isValidEmail && !isPasswordValid) return "Email and Password both are invalid";
  if(!isValidEmail) return "Email is not valid";
  if(!isPasswordValid) return "Password is not valid";
  return null;  
}