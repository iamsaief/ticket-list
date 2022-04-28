import React from 'react';
import Datatable from '../Datatable/Datatable';

export default function TLCardDatatable({ data }) {
	return (
		<div className="tl-card tl-card--datatable tl-mb-40">
			<div className="tl-card__header tl-card__header--flex-between">
				<div className="tl-card__header--title tl-fw-7">My Tickets</div>
				<div className="tl-card__header--filter-search">
					<div>
						<select name="tl-tickets-category-status" className="tl-form-control">
							<option value="all">all</option>
							<option value="open">open</option>
							<option value="feedback">feedback</option>
							<option value="resolved">resolved</option>
						</select>
					</div>
					<div className="tl-form-group--radius tl-form-group--has-icon">
						<input
							type="search"
							name="tl-support-forum-search"
							className="tl-form-control"
							placeholder="Search Tickets"
						/>
					</div>
				</div>
			</div>
			<div className="tl-card__body">
				<Datatable data={data} />
			</div>
		</div>
	);
}
