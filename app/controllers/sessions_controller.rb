class SessionsController < ApplicationController

    skip_before_action :authorized_user, only: :create

    def create
        
        user = User.find_by(username: params[:username])

        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: "Invalid username or Password"}, status: :unauthorized
        end 
    end 





    
end
