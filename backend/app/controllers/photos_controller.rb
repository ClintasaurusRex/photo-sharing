# PhotosController handles the actions related to photos.
# It allows users to create, view, and list photos.
class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render json: @photos
  end

  def show
    @photo = Photo.find(params[:id])
    render json: @photo
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render json: @photo, status: :created
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:user_id, :image_url)
  end
end
