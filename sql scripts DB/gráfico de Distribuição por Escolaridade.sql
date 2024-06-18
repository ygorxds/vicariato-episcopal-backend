CREATE DEFINER=`root`@`%` PROCEDURE `railway`.`spCountMescsByEducation`(
    IN startDate DATE,
    IN endDate DATE,
    IN paroqId INT,
    IN capelId INT
)
BEGIN
    SELECT 
        COALESCE(escolaridade, 'Não Catalogado') AS EducationLevel,
        COUNT(*) AS Total
    FROM 
        mescs
    WHERE
        (startDate IS NULL OR endDate IS NULL OR (created_at BETWEEN startDate AND endDate))
        AND (paroqId IS NULL OR paroqId = paroqId OR (capelId IS NOT NULL AND capelId = capelId))
        AND (capelId IS NULL OR capelId = capelId)
    GROUP BY 
        EducationLevel
    ORDER BY 
        EducationLevel;
END;

