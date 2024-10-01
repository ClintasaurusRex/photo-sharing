class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
         render json: { id: user.id, email: user.email, full_name: user.full_name }, status: :ok        else
            render json: {error: 'Invalid username or password'}, status: :unauthorized
        end
    end
end
