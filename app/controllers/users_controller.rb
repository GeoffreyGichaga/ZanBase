class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
    
    
    def create
        user = User.create!(user_params)
        render json: user ,status: :created, serializer: UserinfoSerializer

    end 

     

  


  

    private
    def user_params
        params.permit(:firstname,:lastname,:email,:username,:role,:supervisor,:password)
    end 

   

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end 
end