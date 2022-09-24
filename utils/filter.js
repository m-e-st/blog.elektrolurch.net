const {
	DateTime
} = require('luxon')

module.exports = {
	/*** Ausschneiden der ersten 200 Zeichen eines Posts ***/
	eleventyConfig.addFilter('excerpt', (post, excerptlength=200) => {
		const content = post.replace(/(<([^>]+)>)/gi, '');
		return content.substr(0, content.lastIndexOf(' ', excerptlength)) + '...';
	});

	/*** mittleres Datumsformat ***/
	eleventyConfig.addFilter('readableDate', (dateObj, language='en') => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc', locale:language }).toFormat('dd LLL yyyy')
		);
	});

	/*** kurzes Datumsformat ***/
	eleventyConfig.addFilter('htmlDateString', (dateObj, language='en') => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc', locale:language }).toFormat('yyyy-LL-dd');
	});

	eleventyConfig.addFilter('dateToIso', (dateString) => {
		return new Date(dateString).toISOString()
	});

}
