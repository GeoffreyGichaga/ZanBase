class TutorialsController < ApplicationController

    def index
        tutorials = Tutorial.all
        render json: tutorials

    end

    def show
        tutorials = Tutorial.find(params[:id])
        render json: tutorials
    end 





    
end
