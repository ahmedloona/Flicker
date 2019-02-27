class Api::SessionsController < ApplicationController

  def create()
    # debugger
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    # debugger
    @user = current_user
    if @user
      self.logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end

end
