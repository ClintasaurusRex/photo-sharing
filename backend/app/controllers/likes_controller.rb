# LikesController handles the creation of likes for photos.
# It allows users to like photos by creating a new like record.
class LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like, status: :created
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :photo_id)
  end
end
