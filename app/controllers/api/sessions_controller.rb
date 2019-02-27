class Api::SessionsController < ApplicationController

  def create()
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user
      login(@user)
      render "api/users/show"
      # render :show
    else
      render json: ["Invalid Credentials"], status: 401
    end
  end

  def destroy
    if self.current_user
      self.logout
      render json: {}
    else
      render json: {}, status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end

end
