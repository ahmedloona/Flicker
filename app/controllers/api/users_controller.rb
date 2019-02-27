class Api::UsersController < ApplicationController
  def create
    @user = User.new
    @user.username = user_params[:username]
    @user.password = user_params[:password]
    @user.email = user_params[:email]
    @user.birth_date = user_params[:birth_date]

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :birth_date)
  end
end
