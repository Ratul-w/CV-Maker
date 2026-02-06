let educationCount = 0;
let experienceCount = 0;
let projectCount = 0;
let certificationCount = 0;
let awardCount = 0;
let leadershipCount = 0;
let publicationCount = 0;

// Initialize with one of each
window.onload = function() {
    addEducation();
    addExperience();
    addProject();
    updatePreview();
};

// Real-time preview update
document.getElementById('cvForm').addEventListener('input', updatePreview);

function addEducation() {
    educationCount++;
    const container = document.getElementById('educationContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-section';
    div.id = `education-${educationCount}`;
    div.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection('education-${educationCount}')">×</button>
        <div class="form-group">
            <label>Degree Name</label>
            <input type="text" class="edu-degree" placeholder="Bachelor of Science in Computer Science">
        </div>
        <div class="grid-2">
            <div class="form-group">
                <label>University</label>
                <input type="text" class="edu-university" placeholder="University Name">
            </div>
            <div class="form-group">
                <label>Graduation Year</label>
                <input type="text" class="edu-year" placeholder="2024">
            </div>
        </div>
        <div class="grid-2">
            <div class="form-group">
                <label>CGPA</label>
                <input type="text" class="edu-cgpa" placeholder="3.8/4.0">
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" class="edu-location" placeholder="City, Country">
            </div>
        </div>
        <div class="form-group">
            <label>Achievements / Coursework</label>
            <textarea class="edu-details" placeholder="Relevant coursework, honors, awards..."></textarea>
        </div>
    `;
    container.appendChild(div);
    div.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));
}

function addExperience() {
    experienceCount++;
    const container = document.getElementById('experienceContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-section';
    div.id = `experience-${experienceCount}`;
    div.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection('experience-${experienceCount}')">×</button>
        <div class="grid-2">
            <div class="form-group">
                <label>Position Title</label>
                <input type="text" class="exp-title" placeholder="Software Engineer Intern">
            </div>
            <div class="form-group">
                <label>Company</label>
                <input type="text" class="exp-company" placeholder="Company Name">
            </div>
        </div>
        <div class="grid-2">
            <div class="form-group">
                <label>Duration</label>
                <input type="text" class="exp-duration" placeholder="June 2023 - August 2023">
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" class="exp-location" placeholder="City, Country">
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="exp-description" placeholder="Key responsibilities and achievements..."></textarea>
        </div>
    `;
    container.appendChild(div);
    div.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));
}

function addProject() {
    projectCount++;
    const container = document.getElementById('projectsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-section';
    div.id = `project-${projectCount}`;
    div.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection('project-${projectCount}')">×</button>
        <div class="grid-2">
            <div class="form-group">
                <label>Project Name</label>
                <input type="text" class="proj-name" placeholder="E-Commerce Platform">
            </div>
            <div class="form-group">
                <label>Tech Stack</label>
                <input type="text" class="proj-tech" placeholder="React, Node.js, MongoDB">
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="proj-description" placeholder="What you built, key features, impact..."></textarea>
        </div>
        <div class="form-group">
            <label>Link (GitHub/Demo)</label>
            <input type="url" class="proj-link" placeholder="https://github.com/...">
        </div>
    `;
    container.appendChild(div);
    div.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));
}

function addCertification() {
    certificationCount++;
    const container = document.getElementById('certificationsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-section';
    div.id = `certification-${certificationCount}`;
    div.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection('certification-${certificationCount}')">×</button>
        <div class="grid-2">
            <div class="form-group">
                <label>Certification Name</label>
                <input type="text" class="cert-name" placeholder="AWS Certified Developer">
            </div>
            <div class="form-group">
                <label>Issuing Organization</label>
                <input type="text" class="cert-org" placeholder="Amazon Web Services">
            </div>
        </div>
        <div class="grid-2">
            <div class="form-group">
                <label>Date</label>
                <input type="text" class="cert-date" placeholder="January 2024">
            </div>
            <div class="form-group">
                <label>Link</label>
                <input type="url" class="cert-link" placeholder="Certificate URL">
            </div>
        </div>
    `;
    container.appendChild(div);
    div.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));
}

function addAward() {
    awardCount++;
    const container = document.getElementById('awardsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-section';
    div.id = `award-${awardCount}`;
    div.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection('award-${awardCount}')">×</button>
        <div class="grid-2">
            <div class="form-group">
                <label>Award Name</label>
                <input type="text" class="award-name" placeholder="Best Innovation Award">
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="text" class="award-date" placeholder="2023">
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="award-description" placeholder="Details about the award..."></textarea>
        </div>
    `;
    container.appendChild(div);
    div.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));
}

function addLeadership() {
    leadershipCount++;
    const container = document.getElementById('leadershipContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-section';
    div.id = `leadership-${leadershipCount}`;
    div.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection('leadership-${leadershipCount}')">×</button>
        <div class="grid-2">
            <div class="form-group">
                <label>Role / Activity</label>
                <input type="text" class="lead-role" placeholder="President, Computer Science Club">
            </div>
            <div class="form-group">
                <label>Duration</label>
                <input type="text" class="lead-duration" placeholder="2022 - 2023">
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="lead-description" placeholder="Responsibilities and achievements..."></textarea>
        </div>
    `;
    container.appendChild(div);
    div.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));
}

function addPublication() {
    publicationCount++;
    const container = document.getElementById('publicationsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-section';
    div.id = `publication-${publicationCount}`;
    div.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeSection('publication-${publicationCount}')">×</button>
        <div class="form-group">
            <label>Publication Title</label>
            <input type="text" class="pub-title" placeholder="Research Paper Title">
        </div>
        <div class="form-group">
            <label>Authors</label>
            <input type="text" class="pub-authors" placeholder="Author 1, Author 2, ...">
        </div>
        <div class="grid-2">
            <div class="form-group">
                <label>Venue / Journal</label>
                <input type="text" class="pub-venue" placeholder="Conference/Journal Name">
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="text" class="pub-date" placeholder="2023">
            </div>
        </div>
        <div class="form-group">
            <label>Link</label>
            <input type="url" class="pub-link" placeholder="https://...">
        </div>
    `;
    container.appendChild(div);
    div.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));
}

function removeSection(id) {
    const element = document.getElementById(id);
    element.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
        element.remove();
        updatePreview();
    }, 300);
}

function updatePreview() {
    // Contact Information
    const fullName = document.getElementById('fullName').value || 'Your Name';
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const linkedin = document.getElementById('linkedin').value;
    const portfolio = document.getElementById('portfolio').value;

    document.getElementById('previewName').textContent = fullName;

    let contactHTML = '';
    if (phone) contactHTML += `<span>${phone}</span>`;
    if (email) contactHTML += `<span>${email}</span>`;
    if (location) contactHTML += `<span>${location}</span>`;
    if (linkedin) contactHTML += `<span>${linkedin}</span>`;
    if (portfolio) contactHTML += `<span>${portfolio}</span>`;
    document.getElementById('previewContact').innerHTML = contactHTML;

    // Professional Summary
    const summary = document.getElementById('summary').value;
    if (summary) {
        document.getElementById('previewSummarySection').style.display = 'block';
        document.getElementById('previewSummary').textContent = summary;
    } else {
        document.getElementById('previewSummarySection').style.display = 'none';
    }

    // Education
    const educations = document.querySelectorAll('#educationContainer .dynamic-section');
    let educationHTML = '';
    educations.forEach(edu => {
        const degree = edu.querySelector('.edu-degree').value;
        const university = edu.querySelector('.edu-university').value;
        const year = edu.querySelector('.edu-year').value;
        const cgpa = edu.querySelector('.edu-cgpa').value;
        const eduLocation = edu.querySelector('.edu-location').value;
        const details = edu.querySelector('.edu-details').value;

        if (degree || university) {
            educationHTML += `
                <div class="cv-item">
                    <div class="cv-item-header">
                        <div>
                            ${degree ? `<div class="cv-item-title">${degree}</div>` : ''}
                            ${university ? `<div class="cv-item-subtitle">${university}${eduLocation ? `, ${eduLocation}` : ''}</div>` : ''}
                        </div>
                        <div>
                            ${year ? `<div class="cv-item-date">${year}</div>` : ''}
                            ${cgpa ? `<div class="cv-item-date">CGPA: ${cgpa}</div>` : ''}
                        </div>
                    </div>
                    ${details ? `<div class="cv-item-description">${details}</div>` : ''}
                </div>
            `;
        }
    });
    if (educationHTML) {
        document.getElementById('previewEducationSection').style.display = 'block';
        document.getElementById('previewEducation').innerHTML = educationHTML;
    } else {
        document.getElementById('previewEducationSection').style.display = 'none';
    }

    // Skills
    const technicalSkills = document.getElementById('technicalSkills').value;
    const softSkills = document.getElementById('softSkills').value;
    let skillsHTML = '';

    if (technicalSkills) {
        skillsHTML += '<div style="margin-bottom: 1rem;"><strong style="color: var(--primary);">Technical Skills:</strong></div>';
        skillsHTML += '<div class="skills-grid">';
        technicalSkills.split(',').forEach(skill => {
            if (skill.trim()) {
                skillsHTML += `<div class="skill-tag">${skill.trim()}</div>`;
            }
        });
        skillsHTML += '</div>';
    }

    if (softSkills) {
        skillsHTML += '<div style="margin-top: 1.5rem; margin-bottom: 1rem;"><strong style="color: var(--primary);">Soft Skills:</strong></div>';
        skillsHTML += '<div class="skills-grid">';
        softSkills.split(',').forEach(skill => {
            if (skill.trim()) {
                skillsHTML += `<div class="skill-tag">${skill.trim()}</div>`;
            }
        });
        skillsHTML += '</div>';
    }

    if (skillsHTML) {
        document.getElementById('previewSkillsSection').style.display = 'block';
        document.getElementById('previewSkills').innerHTML = skillsHTML;
    } else {
        document.getElementById('previewSkillsSection').style.display = 'none';
    }

    // Experience
    const experiences = document.querySelectorAll('#experienceContainer .dynamic-section');
    let experienceHTML = '';
    experiences.forEach(exp => {
        const title = exp.querySelector('.exp-title').value;
        const company = exp.querySelector('.exp-company').value;
        const duration = exp.querySelector('.exp-duration').value;
        const expLocation = exp.querySelector('.exp-location').value;
        const description = exp.querySelector('.exp-description').value;

        if (title || company) {
            experienceHTML += `
                <div class="cv-item">
                    <div class="cv-item-header">
                        <div>
                            ${title ? `<div class="cv-item-title">${title}</div>` : ''}
                            ${company ? `<div class="cv-item-subtitle">${company}${expLocation ? `, ${expLocation}` : ''}</div>` : ''}
                        </div>
                        ${duration ? `<div class="cv-item-date">${duration}</div>` : ''}
                    </div>
                    ${description ? `<div class="cv-item-description">${description}</div>` : ''}
                </div>
            `;
        }
    });
    if (experienceHTML) {
        document.getElementById('previewExperienceSection').style.display = 'block';
        document.getElementById('previewExperience').innerHTML = experienceHTML;
    } else {
        document.getElementById('previewExperienceSection').style.display = 'none';
    }

    // Projects
    const projects = document.querySelectorAll('#projectsContainer .dynamic-section');
    let projectsHTML = '';
    projects.forEach(proj => {
        const name = proj.querySelector('.proj-name').value;
        const tech = proj.querySelector('.proj-tech').value;
        const description = proj.querySelector('.proj-description').value;
        const link = proj.querySelector('.proj-link').value;

        if (name) {
            projectsHTML += `
                <div class="cv-item">
                    <div class="cv-item-header">
                        <div>
                            <div class="cv-item-title">${name}</div>
                            ${tech ? `<div class="cv-item-subtitle">Tech Stack: ${tech}</div>` : ''}
                        </div>
                    </div>
                    ${description ? `<div class="cv-item-description">${description}</div>` : ''}
                    ${link ? `<div style="margin-top: 0.5rem;"><a href="${link}" style="color: var(--primary); font-size: 0.9rem; font-weight: 500;">${link}</a></div>` : ''}
                </div>
            `;
        }
    });
    if (projectsHTML) {
        document.getElementById('previewProjectsSection').style.display = 'block';
        document.getElementById('previewProjects').innerHTML = projectsHTML;
    } else {
        document.getElementById('previewProjectsSection').style.display = 'none';
    }

    // Certifications
    const certifications = document.querySelectorAll('#certificationsContainer .dynamic-section');
    let certificationsHTML = '';
    certifications.forEach(cert => {
        const name = cert.querySelector('.cert-name').value;
        const org = cert.querySelector('.cert-org').value;
        const date = cert.querySelector('.cert-date').value;
        const link = cert.querySelector('.cert-link').value;

        if (name) {
            certificationsHTML += `
                <div class="cv-item">
                    <div class="cv-item-header">
                        <div>
                            <div class="cv-item-title">${name}</div>
                            ${org ? `<div class="cv-item-subtitle">${org}</div>` : ''}
                        </div>
                        <div class="cv-item-date">${date || ''}</div>
                    </div>
                    ${link ? `<div style="margin-top: 0.3rem;"><a href="${link}" style="color: var(--primary); font-size: 0.9rem; font-weight: 500;">View Certificate</a></div>` : ''}
                </div>
            `;
        }
    });
    if (certificationsHTML) {
        document.getElementById('previewCertificationsSection').style.display = 'block';
        document.getElementById('previewCertifications').innerHTML = certificationsHTML;
    } else {
        document.getElementById('previewCertificationsSection').style.display = 'none';
    }

    // Awards
    const awards = document.querySelectorAll('#awardsContainer .dynamic-section');
    let awardsHTML = '';
    awards.forEach(award => {
        const name = award.querySelector('.award-name').value;
        const date = award.querySelector('.award-date').value;
        const description = award.querySelector('.award-description').value;

        if (name) {
            awardsHTML += `
                <div class="cv-item">
                    <div class="cv-item-header">
                        <div class="cv-item-title">${name}</div>
                        <div class="cv-item-date">${date || ''}</div>
                    </div>
                    ${description ? `<div class="cv-item-description">${description}</div>` : ''}
                </div>
            `;
        }
    });
    if (awardsHTML) {
        document.getElementById('previewAwardsSection').style.display = 'block';
        document.getElementById('previewAwards').innerHTML = awardsHTML;
    } else {
        document.getElementById('previewAwardsSection').style.display = 'none';
    }

    // Leadership
    const leadership = document.querySelectorAll('#leadershipContainer .dynamic-section');
    let leadershipHTML = '';
    leadership.forEach(lead => {
        const role = lead.querySelector('.lead-role').value;
        const duration = lead.querySelector('.lead-duration').value;
        const description = lead.querySelector('.lead-description').value;

        if (role) {
            leadershipHTML += `
                <div class="cv-item">
                    <div class="cv-item-header">
                        <div class="cv-item-title">${role}</div>
                        <div class="cv-item-date">${duration || ''}</div>
                    </div>
                    ${description ? `<div class="cv-item-description">${description}</div>` : ''}
                </div>
            `;
        }
    });
    if (leadershipHTML) {
        document.getElementById('previewLeadershipSection').style.display = 'block';
        document.getElementById('previewLeadership').innerHTML = leadershipHTML;
    } else {
        document.getElementById('previewLeadershipSection').style.display = 'none';
    }

    // Publications
    const publications = document.querySelectorAll('#publicationsContainer .dynamic-section');
    let publicationsHTML = '';
    publications.forEach(pub => {
        const title = pub.querySelector('.pub-title').value;
        const authors = pub.querySelector('.pub-authors').value;
        const date = pub.querySelector('.pub-date').value;
        const venue = pub.querySelector('.pub-venue').value;
        const link = pub.querySelector('.pub-link').value;

        if (title) {
            publicationsHTML += `
                <div class="cv-item">
                    <div class="cv-item-title">${title}</div>
                    ${authors ? `<div style="color: #64748b; margin-top: 0.3rem; font-style: italic;">${authors}</div>` : ''}
                    ${venue ? `<div class="cv-item-subtitle">${venue}${date ? `, ${date}` : ''}</div>` : ''}
                    ${link ? `<div style="margin-top: 0.3rem;"><a href="${link}" style="color: var(--primary); font-size: 0.9rem; font-weight: 500;">${link}</a></div>` : ''}
                </div>
            `;
        }
    });
    if (publicationsHTML) {
        document.getElementById('previewPublicationsSection').style.display = 'block';
        document.getElementById('previewPublications').innerHTML = publicationsHTML;
    } else {
        document.getElementById('previewPublicationsSection').style.display = 'none';
    }

    // References
    const references = document.getElementById('references').value;
    if (references) {
        document.getElementById('previewReferencesSection').style.display = 'block';
        document.getElementById('previewReferences').textContent = references;
    } else {
        document.getElementById('previewReferencesSection').style.display = 'none';
    }
}

async function downloadPDF() {
    const loading = document.getElementById('loading');
    loading.classList.add('active');
    
    try {
        const { jsPDF } = window.jspdf;
        const element = document.getElementById('cvPreview');
        
        // Hide preview header and badge before generating PDF
        const previewHeader = document.querySelector('.preview-header');
        const originalDisplay = previewHeader ? previewHeader.style.display : '';
        if (previewHeader) previewHeader.style.display = 'none';
        
        const canvas = await html2canvas(element, {
            scale: 3, // Higher quality
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight
        });
        
        // Restore preview header
        if (previewHeader) previewHeader.style.display = originalDisplay;
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        });
        
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        const fileName = document.getElementById('fullName').value || 'CV';
        pdf.save(`${fileName.replace(/\s+/g, '_')}_Professional_Resume.pdf`);
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
    } finally {
        loading.classList.remove('active');
    }
}

function resetForm() {
    if (confirm('Are you sure you want to reset the form? All data will be lost.')) {
        document.getElementById('cvForm').reset();
        document.getElementById('educationContainer').innerHTML = '';
        document.getElementById('experienceContainer').innerHTML = '';
        document.getElementById('projectsContainer').innerHTML = '';
        document.getElementById('certificationsContainer').innerHTML = '';
        document.getElementById('awardsContainer').innerHTML = '';
        document.getElementById('leadershipContainer').innerHTML = '';
        document.getElementById('publicationsContainer').innerHTML = '';
        
        educationCount = 0;
        experienceCount = 0;
        projectCount = 0;
        certificationCount = 0;
        awardCount = 0;
        leadershipCount = 0;
        publicationCount = 0;
        
        addEducation();
        addExperience();
        addProject();
        updatePreview();
    }
}
