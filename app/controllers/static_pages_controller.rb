class StaticPagesController < ApplicationController

    def root
        if !logged_in?
            redirect_to new_session_url
        end

    end

end