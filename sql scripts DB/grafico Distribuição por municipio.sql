CREATE DEFINER=`root`@`%` PROCEDURE `railway`.`spCountMescsByMunicipality`(
    IN startDate DATE,
    IN endDate DATE,
    IN paroqId INT,
    IN capelId INT
)
BEGIN
    SELECT 
        COALESCE(naturalidade, 'Não Catalogado') AS Municipality,
        COUNT(*) AS Total
    FROM 
        mescs
    WHERE
        (startDate IS NULL OR endDate IS NULL OR (created_at BETWEEN startDate AND endDate))
        AND (paroqId IS NULL OR paroqId = paroqId OR (capelId IS NOT NULL AND capelId = capelId))
        AND (capelId IS NULL OR capelId = capelId)
    GROUP BY 
        Municipality
    ORDER BY 
        Total DESC;
END;
