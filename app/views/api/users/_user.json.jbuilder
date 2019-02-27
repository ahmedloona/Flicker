json.set! @user.id do
  json.extract! @user, :id, :username, :email, :birth_date
end
