class Coach < ApplicationRecord
  has_many :speciality_coaches
  has_many :specialities, through: :speciality_coaches
end
