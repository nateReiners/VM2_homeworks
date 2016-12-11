require 'rails_helper'
require 'spec_helper'

RSpec.describe User do
  subject(:user) do
    FactoryGirl.build(:user,
      name: "nathaniel",
      password: "wordpass2000")
  end

    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:password_digest) }
    it do
      should validate_length_of(:password).
        is_at_least(6).
        on(:create)
    end

    it { should have_many(:subs) }
    it { should have_many(:user_votes) }
    it { should have_many(:comments) }


  it "creates a password digest when password is given" do
    expect(user.password_digest).to_not be_nil
  end

  it "creates a session_token before validation" do
    user.valid?
    expect(user.session_token).to_not be_nil
  end

  describe "#reset_session_token" do
    it "resets session token to new thing" do
      user.valid?
      token = user.session_token
      user.reset_session_token
      expect(user.session_token).to_not eq(token)
    end
  end

  describe "#find_by_credentials" do
    it "finds user by username and password" do
      expect(User.find_by_credentials("nate", "wordpass2000")).to_eq(user)
    end
    it "returns nil if user not found" do
      expect(User.find_by_credentials("xyzyxyzyx", "sdfsasdf")).to eq(nil)
    end
  end
end

RSpec.describe UsersController, :type => :controller do

  describe "GET #new" do
    it "renders the new template" do
      get :new, {}
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
      it "validates the presence of the user's username and password" do
    end
      it "validates that the password is at least 6 characters long" do
    end
  end
  describe "with valid params" do
      it "redirects user to links index on success" do
    end
  end
end
  context "with no strikes or spaces"  do
    it "saves the pin count or each roll" do
      bowling = Bowling.now
      20.times {bowling.hit(4)}
      expect(bowling.score).to_eq 80
    end
  end
