package by.interview.portal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import by.interview.portal.domain.Candidate;
import by.interview.portal.domain.Discipline;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {

    @Query("SELECT c FROM Candidate AS c WHERE :discipline MEMBER OF c.disciplineList")
    List<Candidate> findByDiscipline(@Param("discipline") Discipline discipline);
}
