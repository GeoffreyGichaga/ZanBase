class TutorialsController < ApplicationController

    def index
        tutorials = Tutorial.all
        render json: tutorials, status: :ok

    end

    def show
        tutorial = find_tutorial
        render json: tutorial, status: :ok
    end 

    def create
        tutorial = Tutorial.create(tutorial_params)
        render json: tutorial, status: :created
    end 

    def update
        tutorial = find_tutorial
        tutorial.update(tutorial_params)
        render json: tutorial, status: :created
    end 



    private 
    def tutorial_params
        params.permit(:image_url,:title,:description,:video_url)
    end 

    def find_tutorial
        tutorial = Tutorial.find(params[:id])
    end 





    
end
