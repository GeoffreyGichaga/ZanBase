class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorized_user


    def authorized_user
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

    
end
