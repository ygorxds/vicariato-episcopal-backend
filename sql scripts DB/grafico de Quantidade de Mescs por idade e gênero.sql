CREATE DEFINER=`root`@`%` PROCEDURE `railway`.`spCountMescsByAgeAndGender`(
    IN startDate DATE,
    IN endDate DATE,
    IN paroqId INT,
    IN capelId INT
)
BEGIN
    SELECT 
        CASE
            WHEN TIMESTAMPDIFF(YEAR, dataNascimento, CURDATE()) BETWEEN 0 AND 12 THEN '0-12'
            WHEN TIMESTAMPDIFF(YEAR, dataNascimento, CURDATE()) BETWEEN 13 AND 19 THEN '13-19'
            WHEN TIMESTAMPDIFF(YEAR, dataNascimento, CURDATE()) BETWEEN 20 AND 29 THEN '20-29'
            WHEN TIMESTAMPDIFF(YEAR, dataNascimento, CURDATE()) BETWEEN 30 AND 49 THEN '30-49'
            ELSE '50+'
        END AS AgeGroup,
        COALESCE(genero, 'Não Catalogado') AS Gender,
        COUNT(*) AS Total
    FROM 
        mescs
    WHERE
        (startDate IS NULL OR endDate IS NULL OR (created_at BETWEEN startDate AND endDate))
        AND (paroqId IS NULL OR paroqId = paroqId OR (capelId IS NOT NULL AND capelId = capelId))
        AND (capelId IS NULL OR capelId = capelId)
    GROUP BY 
        AgeGroup, Gender
    ORDER BY 
        AgeGroup, Gender;
END;
