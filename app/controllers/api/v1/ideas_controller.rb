class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params)
  end

  def update
    if params[:changeValue]
      idea.quality = idea.change_quality(params['changeValue'])
      idea.save
    end
    if idea.update(idea_params)
      idea.save
      render json: {response: 'succesful', quality: idea.quality}
    else
      render json: {response: 'failed'}
    end
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.permit(:title, :quality, :id)
  end
end
