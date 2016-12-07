class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, index: true
      t.string :session_token, index: true

      t.timestamps null: false
    end
  end
end
