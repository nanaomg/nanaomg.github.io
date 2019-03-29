  #=======================================================
  # WALKING SCRIPT BY DAX
  # v 1.0
  # ------------------------
  # This simple script makes your character turn 
  # before making a step in the chosen direction
  #=======================================================

class Game_Player < Game_Character
  
                  # you can edit this value (default = 4 )to set the
    Stepdelay = 10 # delay between turning and start walking in frames 
                  # (game runs at 60 fps) => 6 = 1/10 sec

  #====================================
  # updates the steptimer every frame
  #====================================
  alias :dax_frameupdate_0116 update
  def update
      dax_frameupdate_0116
      @steptimer_dax = Stepdelay  unless @steptimer_dax != nil
      @steptimer_dax -= 1 unless @steptimer_dax == 0
    end
    
  #=======================================
  #CHANGE DIRECTION BEFORE WALKING
  #=======================================

  
  alias :dax_directionbeforemove_0446 movable?
  def movable?
    
    @direction_dax =  Input.dir4 #Input.dir4 returns 2,4,6,8 if moving down, left, right or top. returns 0 if no directional keys are pressed
    
    return false if moving?
    unless $game_player.direction == @direction_dax || @direction_dax == 0
      set_direction(@direction_dax)
      @steptimer_dax = Stepdelay
       return false
    end
    return unless @steptimer_dax == 0  
    dax_directionbeforemove_0446
  end
end