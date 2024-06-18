CREATE DEFINER=`root`@`%` PROCEDURE `railway`.`spCountParticipationInOtherMovements`(
    IN startDate DATE,
    IN endDate DATE,
    IN paroqId INT,
    IN capelId INT
)
BEGIN
    SELECT 
        IF(movimentosPastorais IS NULL OR movimentosPastorais = '', 'Não Participa', 'Participa') AS ParticipationStatus,
        COUNT(*) AS Total
    FROM 
        mescs
    WHERE
        (startDate IS NULL OR endDate IS NULL OR (created_at BETWEEN startDate AND endDate))
        AND (paroqId IS NULL OR paroqId = paroqId OR (capelId IS NOT NULL AND capelId = capelId))
        AND (capelId IS NULL OR capelId = capelId)
    GROUP BY 
        ParticipationStatus
    ORDER BY 
        ParticipationStatus;
END;

