CREATE DEFINER=`root`@`%` PROCEDURE `railway`.`spCountMescsByOtherMovements`(
    IN startDate DATE,
    IN endDate DATE,
    IN paroqId INT,
    IN capelId INT
)
BEGIN
    SELECT 
        COALESCE(quaisMovimentos, 'Não Participa') AS MovementParticipation,
        COUNT(*) AS Total
    FROM 
        mescs
    WHERE
        (startDate IS NULL OR endDate IS NULL OR (created_at BETWEEN startDate AND endDate))
        AND (paroqId IS NULL OR paroqId = paroqId OR (capelId IS NOT NULL AND capelId = capelId))
        AND (capelId IS NULL OR capelId = capelId)
    GROUP BY 
        MovementParticipation
    ORDER BY 
        Total DESC;
END;

