USE CV;

DROP TABLE IF EXISTS QualificationsInfo;

CREATE TABLE QualificationsInfo (
  id      SMALLINT UNIQUE,
  type    VARCHAR(255) UNIQUE NOT NULL,
  details VARCHAR(3000) NOT NULL,
  time    DATETIME DEFAULT NOW(),
  PRIMARY KEY (id)
);

