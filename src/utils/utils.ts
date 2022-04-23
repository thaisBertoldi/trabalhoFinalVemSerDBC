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

export const imgConverter = (event: React.ChangeEvent, formik: Function, value: string) => {
  const target = event.target as HTMLInputElement;
  const profileImage = target.files?.[0];
  return formik(value, profileImage);
};