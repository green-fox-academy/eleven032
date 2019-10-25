public class PlanetAndShipDTO {

  private String planetName;
  private int shipCapacity;

  public PlanetAndShipDTO() {}

  public PlanetAndShipDTO(String planetName, int shipCapacity) {
    this.planetName = planetName;
    this.shipCapacity = shipCapacity;
  }

  //getters and setters...

}

@Entity
public class Planet {

  private String name;
  private Long population;

  //constructors, getters and setters...

}

@Entity
public class Spaceship {

  private int capacity;
  private int utilization;

  //constructors, getters and setters...

}

//RestController
@GetMapping("/api/planetandship")
public ResponseEntity<PlanetAndShipDTO> getPlanetNameAndShipCapacity() {
  Planet planets = service.getPlanet();
  Spaceship spaceship = service.getShip();

  if(spaceship == null) {
    return new ResponseEntity.status(HttpStatus.NOT_FOUND);
  }

  PlanetAndShipDTO planetAndShipDTO = new PlanetsAndShipDTO(planet.getName(), ship.getCapacity());
  return new ResponseEntity.status(HttpStatus.OK).body(planetAndShipDTO);
}
