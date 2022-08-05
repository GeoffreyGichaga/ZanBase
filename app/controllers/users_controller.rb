class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
    
    
    def create
        user = User.create!(user_params)
        render json: user ,status: :created, serializer: UserinfoSerializer

    end 

    def update
        user = user.update!(user_updates_params)
        render json: user, status: :created
    end 

  


  

    private
    def user_params
        params.permit(:firstname,:lastname,:email,:username,:role,:supervisor,:password)
    end 

    def user_updates_params
        params.permit(:name_on_account,:bank_name,:account_number,:bank_code,:branch_code,:telephone_number)
    end 

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end 
end
