class UserMailer < ApplicationMailer
  default from: 'from@example.com'

  def welcome_email(user)
    @user = user
    @url = 'http://something.com/login'
    mail(to: user.email, subject: 'Welcome to my great site!')
  end

  def reminder_email(user)
  end

end
