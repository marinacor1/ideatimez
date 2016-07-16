class IdeasController < Api::ApiController
  def index
    ideas = Idea.all
    @ideas = idea.order(created_at: :desc)
  end
end
