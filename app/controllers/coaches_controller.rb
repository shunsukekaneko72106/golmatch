class CoachesController < ApplicationController
  def index
  end

  def new
    @coach = Coach.new
  end
end
