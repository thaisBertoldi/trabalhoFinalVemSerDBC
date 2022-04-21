export const hasLogin = (navigate: any) => {
  const hasToken:string | any = localStorage.getItem('token');
  const User = JSON.parse(hasToken);
  if(User?.token) {
    navigate('/');
  }
}

export const redirectToLogin = (navigate: any) => {
  const hasToken:string | any = localStorage.getItem('token');
  const User = JSON.parse(hasToken);
  if(!User?.token) {
    navigate('/login');
  }
}