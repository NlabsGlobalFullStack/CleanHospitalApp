﻿using eHospitalServer.Infrastructure.Results;
using FluentValidation;
using MediatR;

namespace eHospitalServer.Application.Features.Vehicles.CreateVehicle;
public sealed record CreateVehicleCommand
(
    string Plate,
    byte VehicleTypeValue,
    byte Capacity
) : IRequest<Result<string>>;


public class CreateVehicleCommandValidator : AbstractValidator<CreateVehicleCommand>
{
    public CreateVehicleCommandValidator()
    {
        RuleFor(p => p.Plate)
            .MinimumLength(3)
            .WithMessage("The plate cannot be empty!");

        RuleFor(p => p.Capacity)
            .GreaterThanOrEqualTo((byte)1).WithMessage("Capacity must be at least 1.")
            .LessThanOrEqualTo((byte)100).WithMessage("Capacity must be less than or equal to 100.");
    }
}