class LoginPage
{

get userName()
{
  return $("input[name='username']")
}

get password()
{
    return $("//input[@type='password']")
}


get alert()
{
    return $('.alert-danger')
}

get signIn()
{
    return $('#signInBtn')
}

get textInfo()
{
   return $('p')
}

Login(username,password)
{
    this.userName.setValue(username)
    this.password.setValue(password)
    this.signIn.click()
}



}

module.exports = new LoginPage()