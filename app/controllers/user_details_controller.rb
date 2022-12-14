class UserDetailsController < ApplicationController

    def create
        current_user = User.find(session[:user_id])
        user = current_user.UserDetail.create!(user_payment_details_params)
        render json: user, status: :created
    end


    def update
        user = UserDetail.update!(user_payment_details_params)
        render json: user, status: :created
    end 






    private

    def user_payment_details_params
        params.permit(:name_on_account,:bank_name,:account_number,:bank_code,:branch_code,:telephone_number)
    end 
end
