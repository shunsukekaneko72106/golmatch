class Speciality < ApplicationRecord
  has_many :speciality_coaches
  has_many :coaches, through: :speciality_coaches
end
