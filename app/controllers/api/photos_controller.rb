class Api::PhotosController < ApplicationController

  def index
    unless params[:user_id]
      @photos = Photo.all
    else
      @photos = Photo.where("user_id = ?", params[:user_id])
    end
    render "api/photos/index"
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    if @photo
      render "api/photos/show"
    else
      render json: ["photo not found"], status: 404
    end
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    unless @photo
      return render json: ["photo not found"], status: 404
    end
    if @photo.update_attributes(photo_params)
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])
    unless @photo
      return render json: ["photo not found"], status: 404
    end
    @photo.destroy
    render "api/photos/show"
  end

  private

  def photo_params
    params.require(:photo).permit(:caption, :user_id)
  end

end
