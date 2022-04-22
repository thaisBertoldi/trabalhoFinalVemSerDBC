export const hasLogin = (navigate: Function) => {
  const hasToken:string | any = localStorage.getItem('token');
  const User = JSON.parse(hasToken);
  if(User?.token) {
    navigate('/');
  }
}

export const redirectToLogin = (navigate: Function) => {
  const hasToken:string | any = localStorage.getItem('token');
  const User = JSON.parse(hasToken);
  if(!User?.token) {
    navigate('/login');
  }
}