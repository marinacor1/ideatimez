class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    binding.pry
    respond_with Idea.all
  end

  def create
    binding.pry
    respond_with Idea.create(idea_params)
  end

  def update
    binding.pry
    idea = Idea.find(params['id'])
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
